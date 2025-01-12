export const generatePagination = (total, take) => {
  const numOfPages = Math.ceil(+total / +take);
  let pagesArray = [];

  for (let i = 0; i < numOfPages; i++) {
    pagesArray.push({
      pageNum: i + 1,
      take: take,
      skip: i * take,
    });
  }

  return pagesArray;
};
