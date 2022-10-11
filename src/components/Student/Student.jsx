import Score from "../Score/Score"

const Student = ({student}) => {
  return (
    <>
      <h2>{student.name}</h2>
      <p>{student.bio}</p>

      {student.scores.map(score =>
        <Score key={score.date} score={score} />
      )}
    </>
  )
}

export default Student
