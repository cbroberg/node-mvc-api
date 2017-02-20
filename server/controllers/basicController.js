const basicController = {};
// Empty object

// Testing demo JSON output
basicController.get = (req, res) => {
  res.json({"name":"App","children":[{"name":"NotificationPanel"},{"name":"Header","children":[{"name":"HeaderLogo"},{"name":"HeaderSearchBar"},{"name":"HeaderSearchBarResultList"},{"name":"HeaderSearchBarResultListItem"},{"name":"HeaderSearchBarResultSection"},{"name":"HeaderNotifications"},{"name":"HeaderProfile"},{"name":"HeaderProfileAvatar"},{"name":"HeaderProfileList"},{"name":"HeaderProfileListItem"}]},{"name":"Footer"},{"name":"Workspace"},{"name":"WindowModal"},{"name":"MenuPanel","children":[{"name":"MenuPanelToggle"},{"name":"MenuPanelMessages"},{"name":"MenuPanelList"},{"name":"MenuPanelListItem"},{"name":"MenuPanelUserList"},{"name":"MenuPanelUserListItem"},{"name":"MenuPanelAppMarket"},{"name":"MenuPanelAppMarketList"},{"name":"MenuPanelAppMarketListItem"}]},{"name":"MessagePanel"}]});
  console.log('API root accessed');
};

// Normal JSON output
// basicController.get = (req, res) => {
//   res.json({
//     message: 'Welcome to our API!'
//   });
//   console.log('API root accessed');
// };

export default basicController;

console.log('');
console.log('Executing Controller: basicController.js ...');
