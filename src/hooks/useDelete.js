import { useMutation, useQueryClient } from "react-query";
import { deleteStudy } from "../api/studyTodo";

const useDelete = () => {
  const queryClient = useQueryClient();
  const deleteStudyMutation = useMutation(deleteStudy, {
    onSuccess: () => {
      queryClient.invalidateQueries("study");
    },
  });

  return [deleteStudyMutation];
};

export default useDelete;
