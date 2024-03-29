// const asyncHandler = (func)=> async (req,res,next) =>{
//     try {
//         await func(req,res,next)
//     } catch (error) {
//         resizeBy.status(error.code || 500).json({
//             success:false,
//             message:error.message
//         })
//     }
// }

const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch(() => next(err));
  };
};

export { asyncHandler };
