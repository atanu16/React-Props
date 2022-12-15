import react from "react";
import reactDom from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img width="100" height="100" src={props.img} alt="avter_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

reactDom.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Atanu"
      img="https://scontent.fccu5-1.fna.fbcdn.net/v/t1.6435-9/122706526_2773600766239688_8693738665770918666_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=84a396&_nc_ohc=83q19A_h6doAX8nV3ky&tn=DF2a7CYJrZ7Sll5E&_nc_ht=scontent.fccu5-1.fna&oh=00_AfBSNLNAVgg2rb2o4faTEyrwTh9vNuhG-1tikpfOTuyujw&oe=63C1DC72"
      tel="8016976125"
      email="atanumax2@gmail.com"
    />
    {/* <input id="fname" /> */}
    <Card
      name="Rumzer"
      img="https://scontent.fccu5-1.fna.fbcdn.net/v/t1.6435-9/122706526_2773600766239688_8693738665770918666_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=84a396&_nc_ohc=83q19A_h6doAX8nV3ky&tn=DF2a7CYJrZ7Sll5E&_nc_ht=scontent.fccu5-1.fna&oh=00_AfBSNLNAVgg2rb2o4faTEyrwTh9vNuhG-1tikpfOTuyujw&oe=63C1DC72"
      tel="8016976125"
      email="atanumax2@gmail.com"
    />
  </div>,
  document.getElementById("root")
);
