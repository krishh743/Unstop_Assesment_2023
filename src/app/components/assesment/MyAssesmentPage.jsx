import Image from 'next/image'
import React from 'react'
import AddIcon from "../../../app/assets/add.png";
import Card from '../card/Card';


const MyAssessmentPage = ({ data, setOpenDialog }) => {
    const handleAddAssessment = () => setOpenDialog(prev=>!prev)
    return (
      <div className="p-1 sm:p-2 lg:p-6" style={{width: "100%"}}>
        <div className="subheading2 md:subheading">My Assessment</div>
        <div className="flex flex-wrap justify-start items-center gap-2 md:gap-4 cursor-pointer">
          <div onClick={handleAddAssessment} className="addNew space-y-4">
            <Image src={AddIcon} alt="icon" />
            <span className="subheading2">New Assessment</span>
            <span className="miniHeading1">
              From here you can add questions of multiple types like MCQs,
              subjective (text or paragraph)!
            </span>
          </div>
          {data?.length > 0 &&
            data?.map((item, index) => <Card key={index} data={item} />)}
        </div>
      </div>
    );
}

export default MyAssessmentPage