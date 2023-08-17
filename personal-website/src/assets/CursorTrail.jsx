import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

export default function CursorTrail () {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const springProps = useSpring({
    left: position.x,
    top: position.y,
    from: { left: position.x, top: position.y },
    config: {
        tension: 300,
        friction: 15,
    }
  });

  return (
    <animated.div
      style={{
        position: 'fixed',
        width: '30px',
        height: '30px',
        background: '#fccb6f',
        borderRadius: '50%',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
        boxShadow: '0 0 5px #fccb6f, 0 0 10px #fccb6f, 0 0 15px #db545c, 0 0 20px #db545c',
        ...springProps
      }}
    ></animated.div>
  );
}
