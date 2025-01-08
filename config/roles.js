const roles = {
    admin: ['create', 'read', 'update', 'delete'],
    editor: ['create', 'read', 'update'],
    user: ['read'],
  };
  
  const hasPermission = (role, action) => {
    if (!roles[role]) return false;
    return roles[role].includes(action);
  };
  
  module.exports = { roles, hasPermission };
  