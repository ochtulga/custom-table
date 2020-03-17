import React from 'react'

import styles from './table.module.css'

export function TableCell ({value}) {
  return <span className={styles.cell}>{value}</span>
} 