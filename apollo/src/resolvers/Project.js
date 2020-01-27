// Resolves all relational fields on type Project
// where the name of the function is an exact match to the field

const product = (parent, _args, context) => {
  const res = context.prisma.project({ id: parent.id }).product();

  return res;
};

const teamLead = (parent, _args, context) => {
  const res = context.prisma.project({ id: parent.id }).teamLead();

  return res;
};
const sectionLead = (parent, _args, context) => {
  const res = context.prisma.project({ id: parent.id }).sectionLead();

  return res;
};
const team = (parent, _args, context) => {
  const res = context.prisma.project({ id: parent.id }).team();

  return res;
};

const projectManagers = (parent, _args, context) => {
  const res = context.prisma.project({ id: parent.id }).projectManagers();

  return res;
};

const notes = (parent, _args, context) => {
  const res = context.prisma.project({ id: parent.id }).notes();

  return res;
};

module.exports = {
  product,
  teamLead,
  sectionLead,
  team,
  projectManagers,
  notes,
};
