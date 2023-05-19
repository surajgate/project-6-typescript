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
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

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

  const [style, setStyle] = useState(false);

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
          <Box sx={{ m: 2 }}>
            <Typography fontSize={48} variant="h2">
              Experience
            </Typography>
            <Container
              sx={{
                m : 1,
                width: "40%",
                height: "0.25rem",
                background: "#2caeba",
                margin: "auto",
              }}
            ></Container>
          </Box>
        </Container>
        {/* <Divider></Divider> */}
        <Container sx={{ height: "3rem" }}></Container>
        <Paper sx={{ display: "flex", justifyContent: "center", m: 2 }}>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                background: "aliceblue",
                width: "13rem",
                marginRight: 2,
                p: 1,
              }}
            >
              {jobs.map((item, index) => {
                return (
                  <Box sx={{ display: "block" }}>
                    <Container sx={{ display: "flex" }}>
                      <Button
                        autoFocus
                        variant="text"
                        sx={{
                          width: "9rem",
                          "&:focus": { boxShadow: "-3px 0 #2caeba" },
                        }}
                        key={item.id}
                        onClick={() => {
                          setValue(index);
                          setStyle(true);
                        }}
                      >
                        {item.company}
                      </Button>
                    </Container>
                  </Box>
                );
              })}
            </Box>
            {/* Job Info */}
            <Box sx={{ p: 1 }}>
              <Typography letterSpacing={1} variant="h4" gutterBottom>
                {title}
              </Typography>
              <Box
                sx={{
                  backgroundColor: "#dae2ec",
                  color: "#617d98",
                  width: "fit-content",
                  display: "inline-block",
                  padding: ".375rem .75rem",
                  borderRadius: "0.3rem",
                }}
              >
                <Typography
                  fontWeight={"bold"}
                  fontSize={15}
                  letterSpacing={1}
                  variant="h5"
                  gutterBottom
                >
                  {company}
                </Typography>
              </Box>
              <Typography
                sx={{ marginTop: 1 }}
                color="#617d98"
                paragraph
                gutterBottom
              >
                {dates}
              </Typography>
              {duties.map((duty, index) => {
                return (
                  <Container sx={{ display: "flex", alignItems: "center" }}>
                    <KeyboardDoubleArrowRightIcon sx={{ color: "#2caeba" }} />
                    <Typography paragraph sx={{ m: 2 }}>
                      {duty}
                    </Typography>
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
