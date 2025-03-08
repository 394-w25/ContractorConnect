import { Plus, Trash } from 'lucide-react';

 
 const WallWidget = (props) => {
     
 
     return (
         <div className="w-full flex flex-col justify-center items-center ">
             <div className="overflow-x-auto p-4 ">
                 <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-lg w-[25rem]">
                     <tbody>
                         <tr className="border-b">
                             <td className="px-4 py-2 font-semibold bg-gray-100">Project Title</td>
                             <td className="px-4 py-2">
                                 <input type="text" value={props.projectTitle} className="px-2 py-1 w-full"
                                     onChange={e => props.actionProvider.setProjectTitle(e.target.value)}
                                 />
                             </td>
                         </tr>
                         <tr className="border-b">
                             <td className="px-4 py-2 font-semibold bg-gray-100">Property Address</td>
                             <td className="px-4 py-2">
                                 <input type="text" className="px-2 py-1 w-full" value={props.address}
                                     onChange={e => props.actionProvider.setAddress(e.target.value)}
                                 />
                             </td>
                         </tr>
                         <tr className="border-b">
                             <td className="px-4 py-2 font-semibold bg-gray-100">Number of Walls</td>
                             <td className="px-4 py-2 flex justify-center items-center">
                                 <input type="number" className="px-2 py-1 border rounded w-14" value={props.noOfWalls}
                                     onChange={e => props.actionProvider.setNoOfWalls(e.target.value)}
                                 />
                             </td>
                         </tr>
                         {props.dimensions.map((dim, idx) => (
                             <tr className="border-b last:border-none" key={idx}>
                                 <td className="px-4 py-2 font-semibold bg-gray-100">Dimensions of Wall {idx + 1}</td>
                                 <td className="px-4 py-2 flex flex-row justify-between items-center">
                                     <span className="flex flex-row justify-center items-center gap-1.5">
                                         <input type="number" className="px-2 py-1 w-14 border rounded" value={dim[0]}
                                             onChange={e => props.actionProvider.handleDimChange(idx, 0, e.target.value)}
                                         />
                                         <span>x</span>
                                         <input type="number" className="px-2 py-1 w-14 border rounded" value={dim[1]}
                                             onChange={e => props.actionProvider.handleDimChange(idx, 1, e.target.value)}
                                         />
                                     </span>
                                     {/* <button className="p-0.5 rounded-full text-white bg-black"> */}
                                     <button className="text-gray-500 hover:text-red-500"
                                         onClick={() => props.actionProvider.handleDimDel(idx)}
                                     >
                                         <Trash />
                                     </button>
                                 </td>
                             </tr>
                         ))}
                         <tr>
                             <td colSpan={2} className="px-4 py-2 text-center">
                                 <button onClick={props.actionProvider.handleDimAdd} className="px-3 py-1 rounded flex items-center gap-1 mx-auto font-semibold">
                                     <Plus /> Add Wall
                                 </button>
                             </td>
                         </tr>
                     </tbody>
                 </table>
             </div>
             <div className="w-[25rem] flex flex-row justify-end items-center">
                 <button className="border rounded px-3 py-2 flex justify-center items-center bg-homieBlue text-white font-semibold"
                 onClick={props.actionProvider.handleSubmitForm}>
                     Submit
                 </button>
             </div>
         </div>
     )
 }
 
 export default WallWidget;