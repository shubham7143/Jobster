import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StatsContainer, ChartsContainer, InterviewCalender, StatsContainerSkelton, InterviewCalenderSkelton,
} from "../../components";
import { showStats } from "../../features/allJobs/allJobsSlice";

const Stats = () => {
  const { isLoading, monthlyApplications } = useSelector(
    (store) => store.allJobs,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showStats());
    // eslint-disable-next-line
  }, []);
  if (isLoading) {
    return (
      <>
        <StatsContainerSkelton />
        <InterviewCalenderSkelton />
      </>
    );
  }
  return (
    <>
      <StatsContainer />
      <InterviewCalender />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};

export default Stats;
