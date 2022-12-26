const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-purple-800 border-b-2 border-purple-200 mb-12">
      <span>Back</span>
      <h2 className="text-xl">Title</h2>
      <div className="w-12 h-12 rounded-full flex bg-purple-600 items-center justify-center">IMG</div>
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