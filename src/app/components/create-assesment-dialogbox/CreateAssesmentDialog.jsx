import {Fragment, useRef, useState} from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Header from "../header/Header";
import AssesmentDetails from "../assesment-details/AssesmentDetails";
import {toast} from "react-toastify";
import MyAssessmentPage from "../assesment/MyAssesmentPage";

const CreateAssesmentDialogBox = () => {
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [skills, setSkills] = useState([
    "Javascript",
    "NodeJs",
    "ReactJs",
    "Express",
    "MongoDb",
  ]);
  const cancelButtonRef = useRef(null);
  const [formData, setFormData] = useState({
    title: "",
    purpose: "",
    questions: "",
    duration: "",
    date: new Date().toDateString().slice(3),
  });

  const handleChange = (e, fieldName) => {
    const {value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    data.unshift(formData);
    setOpenDialog(false);
    toast.success("Added Successfully!");
  };

  const addSkills = (e) => {
    if (e.key === "Shift") {
      const newValue = e.target.value;
      setSkills((prevValues) => [...prevValues, newValue]);
      e.target.value = "";
    }
  };
  const removeSkills = (item) => {
    const updatedSkills = skills.filter((skill) => skill !== item);
    setSkills(updatedSkills);
  };

  return (
    <>
      <div className="flex flex-col justify-start items-start overflow-hidden">
        <Header setOpen={setOpen} />
        {open && (
          <>
            <AssesmentDetails data={data} />
            <MyAssessmentPage data={data} setOpenDialog={setOpenDialog} />
          </>
        )}
      </div>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>
          Create New Assessment{" "}
          <CloseIcon
            style={{float: "right", cursor: "pointer"}}
            onClick={() => setOpenDialog(false)}
            variant="outlined"
            ref={cancelButtonRef}
          />
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            <div className="mt-8">
              <p className="text-sm text-gray-500">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-4 md:gap-8">
                    <TextField
                      id="standard-basic"
                      variant="standard"
                      name="title"
                      type="text"
                      label="Name of assesment"
                      placeholder="Type Here"
                      value={formData.title}
                      onChange={(e) => handleChange(e, "title")}
                      error={formData.title === ""}
                      helperText={
                        formData.title === "" ? "Title is required" : ""
                      }
                    />

                    <FormControl>
                      <InputLabel>Purpose of the test is</InputLabel>
                      <Select
                        id="standard-basic"
                        variant="standard"
                        name="purpose"
                        value={formData.purpose}
                        onChange={(e) => handleChange(e, "purpose")}
                        required
                      >
                        <MenuItem value="Private Job">Private Job</MenuItem>
                        <MenuItem value="Internship">Internship</MenuItem>
                        <MenuItem value="Industrial Training">
                          Industrial Training
                        </MenuItem>
                        <MenuItem value="Gvt. Job">Gvt. Job</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                      </Select>
                    </FormControl>

                    <TextField
                      id="standard-basic"
                      variant="standard"
                      name="questions"
                      label="Question"
                      type="number"
                      value={formData.questions}
                      onChange={(e) => handleChange(e, "questions")}
                      required
                    />

                    <div className="flex flex-wrap justify-start items-center p-4 border-2 gap-2 rounded-lg">
                      {skills?.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="flex justify-center items-center bg-orange-300 py-1 px-4 gap-4 rounded-xl"
                          >
                            <span>{item}</span>
                            <span
                              onClick={() => removeSkills(item)}
                              className="text-xl cursor-pointer"
                            >
                              ×
                            </span>
                          </div>
                        );
                      })}
                    </div>
                    <TextField
                      id="standard-basic"
                      variant="standard"
                      name="skills"
                      placeholder="Type Here"
                      label="Skills (Press 'Shift' to add)"
                      type="text"
                      onKeyUp={addSkills}
                    />

                    <TextField
                      id="standard-basic"
                      variant="standard"
                      name="duration"
                      label="Duration of assesment"
                      placeholder="(HH:MM:SS)"
                      value={formData.duration}
                      onChange={(e) => handleChange(e, "duration")}
                      required
                    />
                  </div>
                </form>
              </p>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{diplay: "flrx", justifyContent: "center"}}>
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            fullWidth
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreateAssesmentDialogBox;

const data = [
  {
    title: "NodeJs Assessment",
    purpose: "Job",
    questions: 24,
    duration: "00:04:00",
    date: "20 Apr 2023",
  },
  {
    title: "ReactJs Assessment",
    purpose: "Intern",
    questions: 50,
    duration: "00:02:00",
    date: "11 Sep 2023",
  },
];
