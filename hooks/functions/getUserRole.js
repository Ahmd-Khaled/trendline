export const getUserRole = (roleId) => {
  roleId = Number(roleId);
  if (roleId === 1) {
    return "Admin";
  } else if (roleId === 2) {
    return "Store";
  } else if (roleId === 3) {
    return "Normal User";
  } else {
    return "--";
  }
};
