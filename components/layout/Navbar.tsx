const Navbar = () => {
  return (
    <div>
      <h1>Navbar</h1>
    </div>
  )
}

export default Navbar

//  const decreaseTime = useCallback(() => {
//     if (seconds > 0) {
//       setSeconds(time => time - 1);
//     } else {
//       clearInterval(timerRef.current);
//     }
//   }, [seconds]);
//   useEffect(() => {
//     if (isCounting && seconds > 0) {
//       timerRef.current = setInterval(decreaseTime, 1000);
//     } else {
//       plainModalRef.current.close();
//       // setSeconds(10);
//     }
//     return () => clearInterval(timerRef.current);
//   }, [isCounting, seconds, decreaseTime]);

// const [seconds, setSeconds] = useState(10);
// const [isCounting, setIsCounting] = useState(false);
// const [runTime, setRunTime] = useState(false);
// const timerRef = useRef();