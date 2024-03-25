function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/dashboard';

export const PATH_DASHBOARD = {
    root: ROOTS_DASHBOARD,
    tables: path(ROOTS_DASHBOARD, '/tables'),
    billing: path(ROOTS_DASHBOARD, '/billing'),
    profile: path(ROOTS_DASHBOARD, '/profile'),
}