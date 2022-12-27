import Image from "next/image"
import BallSpinning from "../loaders/BallSpinning"
import userImg from "../../assets/images/me-with-cup.jpeg"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-8 bg-gray-500 border-b-2 border-purple-200 mb-12">
      <span>Back</span>
      <h2 className="text-xl">Pick a Game</h2>
      <div className="w-12 h-12 rounded-full overflow-hidden flex bg-purple-600 items-center justify-center border-2 border-purple-400">
        <Image
          src={userImg}
          width="100"
          height="100"
          objectFit="cover"
          alt=""
        />
      </div>
      {/* <BallSpinning /> */}
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