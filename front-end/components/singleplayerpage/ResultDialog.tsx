// "use client";
// import { createElement } from "react";
// import {
//   Dialog,
//   Typography,
//   Button,
//   DialogBody,
//   DialogHeader,
//   DialogFooter,
// } from "@material-tailwind/react";
// import {
//   ClockIcon,
//   BoltIcon,
//   CheckBadgeIcon,
//   ArrowPathIcon,
//   ArrowRightOnRectangleIcon,
//   ArchiveBoxIcon,
// } from "@heroicons/react/24/solid";

// const ResultDialog = ({
//   open,
//   time,
//   wpm,
//   accuracy,
//   disableButton,
//   handleSave,
//   handleRetry,
//   handleLeave,
//   failed,
//   authStatus,
// }) => {
//   const results = [
//     {
//       icon: ClockIcon,
//       label: "Time taken",
//       value: `${time} s`,
//       color: "text-blue-gray-300",
//     },
//     {
//       icon: BoltIcon,
//       label: "Speed",
//       value: `${wpm} WPM`,
//       color: "text-orange-300",
//     },
//     {
//       icon: CheckBadgeIcon,
//       label: "Accuracy",
//       value: `${accuracy} %`,
//       color: "text-light-green-400",
//     },
//   ];
//   const disableKeyDown = (e) => {
//     if (e.key === "Enter" || e.key === " ") {
//       e.preventDefault();
//     }
//   };
//   return (
//     <Dialog open={open} size="md" dismiss={{ enabled: false }}>
//       <DialogHeader>
//         <Typography variant="h4" className="text-center lg:text-2xl text-lg">
//           {failed ? "Nice Try" : "Result"}
//         </Typography>
//       </DialogHeader>
//       <DialogBody className="flex flex-col gap-6" divider>
//         {results.map(({ icon, label, value, color }, index) => {
//           const colorClass = `w-8 h-8 hidden md:block ${color}`;
//           return (
//             <div
//               className="grid grid-cols-3 md:gap-10 gap-2 items-center text-xl"
//               key={index}
//             >
//               <div className="flex items-center md:gap-8 gap-4 col-span-2">
//                 {createElement(icon, { strokeWidth: 2, className: colorClass })}
//                 <Typography color="blue-gray">{label}</Typography>
//               </div>
//               <div className="col-auto">
//                 <Typography color="blue-gray" className="font-bold">
//                   {value}
//                 </Typography>
//               </div>
//             </div>
//           );
//         })}
//         {failed && (
//           <Typography variant="small" color="blue-gray" className="italic">
//             Note: You can only save if you completed the test
//           </Typography>
//         )}
//       </DialogBody>
//       <DialogFooter className="gap-2 lg:flex-row lg:justify-end md:justify-center">
//         {!failed && authStatus === "authenticated" && (
//           <Button
//             variant="outlined"
//             color="green"
//             className="flex items-center gap-3 lg:w-auto"
//             onClick={handleSave}
//             onKeyDown={disableKeyDown}
//             disabled={disableButton}
//             ripple={false}
//             fullWidth
//           >
//             <ArchiveBoxIcon strokeWidth={2} className="h-5 w-5" />
//             Save
//           </Button>
//         )}
//         <Button
//           variant="outlined"
//           color="blue"
//           className="flex items-center gap-3 lg:w-auto"
//           onClick={handleRetry}
//           onKeyDown={disableKeyDown}
//           disabled={disableButton}
//           ripple={false}
//           fullWidth
//         >
//           <ArrowPathIcon strokeWidth={2} className="h-5 w-5" />
//           Retry
//         </Button>
//         <Button
//           variant="outlined"
//           color="red"
//           className="flex items-center gap-3 lg:w-auto"
//           onClick={handleLeave}
//           onKeyDown={disableKeyDown}
//           disabled={disableButton}
//           ripple={false}
//           fullWidth
//         >
//           <ArrowRightOnRectangleIcon strokeWidth={2} className="h-5 w-5" />
//           Leave
//         </Button>
//       </DialogFooter>
//     </Dialog>
//   );
// };

// export default ResultDialog;
