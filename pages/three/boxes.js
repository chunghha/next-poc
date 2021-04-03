import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '../../src/components/Link';
import UsersAppBar from '../../src/components/UsersAppBar';

const MyBox = (props) => {
  const mesh = useRef()

  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  return (
    <Box
      args={[1, 1, 1]}
      {...props}
      ref={mesh}
      scale={active ? [20, 20, 20] : [16, 16, 16]}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <meshStandardMaterial
        attach="material"
        color={hovered ? '#2b6c76' : '#720b23'}
      />
    </Box>
  )
}

const BoxesPage = () => {
  return [
    <Container maxWidth="lg">
      <UsersAppBar />
      <Typography variant="h4" component="h1" gutterBottom>
        Next.js v5-alpha with Three example
      </Typography>
      <Link href="/">Go to the main page</Link>
      <Typography variant="h5" component="h1" gutterBottom style={{ margin: 4 + 'px' }}>
        Click on me - Hover me :)
      </Typography>
      <Canvas camera={{ position: [0, 0, 70] }}>
        <ambientLight intensity={3} />
        <pointLight position={[80, 80, 80]} />
        <MyBox position={[24, 0, 0]} />
        <MyBox position={[-24, 0, 0]} />
        <MyBox position={[0, 24, 0]} />
        <MyBox position={[0, -24, 0]} />
        <OrbitControls />
      </Canvas>
    </Container>
  ]
}

export default BoxesPage
