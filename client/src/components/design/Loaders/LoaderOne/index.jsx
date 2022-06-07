import React from 'react';
import styles from '../Loader.module.css';

import { FiLoader } from 'react-icons/fi';

/**
 *
 * @param {Number} size The size of the loader. Default 19.
 * @returns Loader Component
 */
const LoaderOne = ({ size = 19 }) => {
  return <FiLoader className={styles.icon} size={size} />;
};

export default LoaderOne;
