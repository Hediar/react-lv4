import { useMutation, useQueryClient } from "react-query";
import { deleteComment, deleteStudy } from "../api/studyTodo";

const useDelete = () => {
  const queryClient = useQueryClient();
  const deleteStudyMutation = useMutation(deleteStudy, {
    onSuccess: () => {
      queryClient.invalidateQueries("study");
      console.log("Delete 성공");
    },
  });

  //   const deleteCommentMutation = useMutation(deleteComment, {
  //     onSuccess: () => {
  //       queryClient.invalidateQueries(`${id}Comments`);
  //       console.log("comment Delete 성공");
  //     },
  //   });

  return [deleteStudyMutation];
};

export default useDelete;
