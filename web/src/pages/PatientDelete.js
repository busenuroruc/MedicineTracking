import axios from "axios";

export default function PatientDelete(props) {
  const { row, list } = props;

  const onClickDelete = (e) => {
    e.preventDefault();
    axios.delete("http://127.0.0.1:8000/api/patient/delete/" + row.id);
    list(true);
  };

  return (
    <tr>
      <td>
        <button
          onClick={onClickDelete}
          style={{ backgroundColor: "#f8f9fa", color: "#d63384" }}>
          DELETE
        </button>
      </td>
    </tr>
  );
}
