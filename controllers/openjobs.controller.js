import query from "../db/utils";

const findAll = async () => {
  return query(
    "SELECT id, Candidate First Name, Candidate Last Name, Job Title, FROM openjobs"
  );
};

const findOne = async (id) => {
  return query(
    "SELECT id, Candidate First Name, Candidate Last Name, Job Title, FROM openjobs WHERE id = ?",
    [id]
  );
};

const addOne = async (job) => {
  return await query("INSERT INTO openjobs SET ?", [job]);
};

const updateOne = async (id, job) => {
  return await query("UPDATE openjobs SET ? WHERE id = ?", [employee, id]);
};

const removeOne = async (id) => {
  return await query("DELETE FROM openjobs WHERE id = ?", [id]);
};

export default {
  findAll,
  findOne,
  addOne,
  updateOne,
  removeOne,
};
