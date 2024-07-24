import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  Box,
  TextField,
  LinearProgress,
} from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import SendIcon from "@mui/icons-material/Send";

const mockQuestions = {
  "git-github": [
    {
      id: 1,
      question: "What is the purpose of Git?",
      answer:
        "Git is a distributed version control system used for tracking changes in source code during software development.",
    },
    {
      id: 2,
      question: "How do you create a new branch in Git?",
      answer:
        "To create a new branch in Git, you use the command 'git branch <branch-name>' or 'git checkout -b <branch-name>' to create and switch to the new branch.",
    },
    {
      id: 3,
      question: "What is a pull request?",
      answer:
        "A pull request is a method of submitting contributions to a project. It's a way to notify project maintainers about changes you've pushed to a branch in a repository on GitHub.",
    },
  ],
  java: [
    {
      id: 1,
      question: "What is the difference between JDK and JRE?",
      answer:
        "JDK (Java Development Kit) is for developing Java applications, while JRE (Java Runtime Environment) is for running Java applications.",
    },
    {
      id: 2,
      question: "Explain the concept of inheritance in Java.",
      answer:
        "Inheritance in Java is a mechanism where a new class is derived from an existing class. It allows a class to inherit properties and methods from another class.",
    },
    {
      id: 3,
      question: "What is the purpose of the 'static' keyword in Java?",
      answer:
        "The 'static' keyword in Java is used to create class-level members (variables and methods) that belong to the class rather than to any specific instance of the class.",
    },
  ],
};

const InterviewPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [scores, setScores] = useState([]);

  const questions = mockQuestions[categoryId] || [];
  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (currentQuestionIndex < questions.length - 1) {
      handleNextQuestion();
    }
  }, [timeLeft, currentQuestionIndex, questions.length]);

  const handleNextQuestion = () => {
    const score = calculateScore(answer, currentQuestion.answer);
    setScores([...scores, score]);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setAnswer("");
      setTimeLeft(60);
    } else {
      // Interview finished, navigate to results
      navigate("/results", { state: { scores } });
    }
  };

  const calculateScore = (userAnswer, correctAnswer) => {
    // This is a very basic scoring mechanism. You might want to implement a more sophisticated one.
    const userWords = userAnswer.toLowerCase().split(" ");
    const correctWords = correctAnswer.toLowerCase().split(" ");
    const commonWords = userWords.filter((word) => correctWords.includes(word));
    return (commonWords.length / correctWords.length) * 100;
  };

  const handleSpeak = () => {
    // Implement text-to-speech functionality here
    const speech = new SpeechSynthesisUtterance(currentQuestion.question);
    window.speechSynthesis.speak(speech);
  };

  if (!currentQuestion) {
    return <Typography>No questions available for this category.</Typography>;
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        {categoryId.replace("-", " ").toUpperCase()} Interview
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" gutterBottom>
          Question {currentQuestionIndex + 1} of {questions.length}
        </Typography>
        <LinearProgress
          variant="determinate"
          value={(timeLeft / 60) * 100}
          sx={{ mb: 2 }}
        />
        <Typography variant="body1" gutterBottom>
          {currentQuestion.question}
        </Typography>
        <Button startIcon={<MicIcon />} onClick={handleSpeak} sx={{ mb: 2 }}>
          Speak Question
        </Button>
      </Box>
      <TextField
        fullWidth
        multiline
        rows={4}
        variant="outlined"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Type your answer here..."
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        endIcon={<SendIcon />}
        onClick={handleNextQuestion}
        fullWidth
      >
        {currentQuestionIndex < questions.length - 1
          ? "Submit Answer"
          : "Finish Interview"}
      </Button>
    </Container>
  );
};

export default InterviewPage;
