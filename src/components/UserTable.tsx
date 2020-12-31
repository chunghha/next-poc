import * as React from 'react';
import axios from 'axios';
import useSWR from 'swr';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { User } from '../models/user.interface';

const StyledTableCell = withStyles((theme: Theme) =>
	createStyles({
		head: {
			backgroundColor: theme.palette.secondary.main,
			color: theme.palette.common.black,
			fontSize: 16,
		},
		body: {
			fontSize: 16,
		},
	})
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
	createStyles({
		root: {
			'&:nth-of-type(odd)': {
				backgroundColor: theme.palette.action.hover,
			},
			// hide last border
			'&:last-child td, &:last-child th': {
				border: 0,
			},
		},
	})
)(TableRow);

const useStyles = makeStyles({
	table: {
		minWidth: 700,
	},
});

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function UserTable() {
	const classes = useStyles();

	const { data, error } = useSWR('https://jsonplaceholder.typicode.com/users', fetcher);

	if (error)
		return (
			<div>
				<p>An error has occurred.</p>
			</div>
		);
	if (!data)
		return (
			<div>
				<p>Loading...</p>
			</div>
		);

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="customized table">
				<TableHead>
					<TableRow>
						<StyledTableCell>Name</StyledTableCell>
						<StyledTableCell>Email</StyledTableCell>
						<StyledTableCell>Phone</StyledTableCell>
						<StyledTableCell>Website</StyledTableCell>
						<StyledTableCell>Company</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((user: User) => (
						<StyledTableRow key={user.id}>
							<StyledTableCell component="th" scope="row">
								{user.name}
							</StyledTableCell>
							<StyledTableCell>{user.email}</StyledTableCell>
							<StyledTableCell>{user.phone}</StyledTableCell>
							<StyledTableCell>{user.website}</StyledTableCell>
							<StyledTableCell>{user.company.name}</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
