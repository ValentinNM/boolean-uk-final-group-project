export default function ListOfClasses(props) {
  return (
    <>
      <h2>List Of Classes</h2>
      <ul>
        {props.classes.map((classe, index) => {
            const { className, classType, classStatus, classStartDate, duration } = classe
          return (
            <li key={index} className="border-for-li">
              <h3>Name of Class: {className}</h3>
              <p>Type of Class: {classType}</p>
              <p>Status: {classStatus}</p>
              <p>Start Date: {classStartDate}</p>
              <p>Duration of Class: {duration}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
