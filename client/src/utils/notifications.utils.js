import { Store } from 'react-notifications-component';

/**
 *
 * @description This creates a notification which is displayed on the screen
 * @param {String} title The title of the notification
 * @param {String} message The message of the notification. Default value is "".
 * @param {String} type The type of notification default is "default". Acceptable values "success", "danger", "info", "default", "warning"
 * @param {Number} duration Default value is 5000. Duration for which it will show
 * @param {String} insert The place of insertion default - "top". Acceptable values "top" or "bottom"
 * @param {String} container The container of the notification default - "top-right". Acceptable values "top-right", "top-left", "top-center", "center", bottom-right", "bottom-left", "bottom-center"
 * @param {Array} animationIn Default value is ['animated', 'fadeIn']
 * @param {Array} animationOut Deafult value is ['animated', 'fadeOut']
 * @param {Object} dismiss
 * @param {Object} dismissable
 * @author ammrit2312 <amriteshc101@icloud.com>
 */
const showNotification = ({
  title,
  message = '',
  type = 'default',
  duration = 5000,
  insert = 'top',
  container = 'top-right',
  animationIn = ['animated', 'fadeIn'],
  animationOut = ['animated', 'fadeOut'],
  dismiss = {
    pauseOnHover: true,
    onScreen: true,
  },
  dismissable = { click: true },
}) => {
  Store.addNotification({
    title,
    message,
    type,
    insert,
    container,
    animationIn,
    animationOut,
    dismiss: {
      ...dismiss,
      duration,
    },
    dismissable,
  });
};

export default showNotification;
