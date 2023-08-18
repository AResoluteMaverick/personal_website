import { useState, useEffect} from 'react';
import { useSpring, animated, config } from 'react-spring';

export default function App() {
  const [active, setActive] = useState(false);
  const { x } = useSpring({ config: { duration: 800 }, x: active ? 1 : 0 });

  useEffect(() => {
    const id = setTimeout(() => {
      setActive(!active);
    }, 2000);

    return () => clearTimeout(id);
  }, [active]);

  useEffect(() => {
    setActive(true);
  }, []);

  return (
      <svg
        viewBox="0 0 200 200"
        height="200px"
        width="200px"
        onClick={() => setActive(!active)}
      >
        <animated.path
          d={x.to({
            range: [0, 1],
            output: [
              "M32.6,-64.6C35.1,-55.1,25,-31.8,25.8,-18.8C26.7,-5.7,38.5,-2.9,43.7,3C49,8.9,47.6,17.8,40.3,19.7C33,21.6,19.8,16.5,12.1,12.3C4.4,8.1,2.2,4.8,-6.1,15.3C-14.3,25.8,-28.6,50.1,-40.4,56.6C-52.1,63.1,-61.2,51.9,-67,39.5C-72.9,27.1,-75.5,13.5,-71.8,2.1C-68.1,-9.3,-58.2,-18.6,-47.9,-23.1C-37.5,-27.7,-26.6,-27.5,-18.5,-33.7C-10.5,-39.9,-5.2,-52.6,4.9,-61.1C15.1,-69.7,30.2,-74,32.6,-64.6Z",
              "M18.2,-40.6C20.8,-30,18.3,-19.5,19.6,-12.8C20.9,-6.1,26.1,-3,28.3,1.3C30.5,5.5,29.6,11.1,28.2,17.6C26.8,24.2,24.7,31.7,19.9,29.8C15.1,27.9,7.6,16.5,-1.6,19.2C-10.7,21.9,-21.3,38.6,-26.6,40.8C-31.8,43,-31.7,30.6,-31.5,21.4C-31.2,12.2,-30.8,6.1,-38.3,-4.3C-45.7,-14.6,-60.9,-29.3,-63.6,-42.8C-66.4,-56.4,-56.6,-68.8,-44,-73.7C-31.3,-78.5,-15.6,-75.8,-3.9,-69C7.8,-62.1,15.5,-51.3,18.2,-40.6Z",
            ],
          })}
          {
            portfolioData.map(item => (
                <Link to={`project/${item.path}`} key={item.id} className={styles.portfolioItemTitle}>{item.title}</Link>
            ))
        }
        />
      </svg>
  )
}