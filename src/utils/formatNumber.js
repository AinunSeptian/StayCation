export default number => {
  const formatnumbering = new Intl.NumberFormat('id-ID');
  return formatnumbering.format(number);
};
