import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  Divider,
} from "@mui/material";
import { FaAngleDoubleRight } from "react-icons/fa";
import React, { useEffect, useState } from "react";

interface JobsType {
  id: string;
  order: number;
  title: string;
  dates: string;
  duties: string[];
  company: string;
}

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [jobs, setJobs] = useState<JobsType[]>([]);
  const [value, setValue] = useState<number>(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <>
        <Container>
          <Typography variant="h3">Loading...</Typography>
        </Container>
      </>
    );
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <>
      {/* Center Content Container */}
      <Container>
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          {/*  */}
          <Box>
            <Typography variant="h2">Experience</Typography>
            <Container
              sx={{
                width: "50%",
                height: "0.25rem",
                background: "lightblue",
                margin: "auto",
              }}
            ></Container>
          </Box>
        </Container>
        {/* <Divider></Divider> */}
        <Container sx={{height : '3rem'}}></Container>
        <Paper sx={{ display: "flex", justifyContent: "center", m: 2 }}>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ background: "aliceblue", width : '13%',marginRight : 2,  p : 1 }}>
              {jobs.map((item, index) => {
                return (
                  <Box sx={{ display: "block" }}>
                    <Button
                      variant="text"
                      sx={{ width : '9rem' }}
                      key={item.id}
                      onClick={() => {
                        setValue(index);
                      }}
                    >
                      {item.company}
                    </Button>
                  </Box>
                );
              })}
            </Box>
            {/* Job Info */}
            <Box>
              <Typography variant="h3" gutterBottom>
                {title}
              </Typography>
              <Typography variant="h5" gutterBottom>
                {company}
              </Typography>
              <Typography paragraph gutterBottom>{dates}</Typography>
              {duties.map((duty, index) => {
                return (
                  <Container>
                    <FaAngleDoubleRight></FaAngleDoubleRight>
                    <Typography paragraph>{duty}</Typography>
                  </Container>
                );
              })}
            </Box>
          </Box>
        </Paper>
        {/* <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button>More Info</Button>
          </Box> */}
      </Container>
    </>
  );
}

export default App;
