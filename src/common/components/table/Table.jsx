import styles from './Table.module.css'

export const Table = ({ header, data = null, options = null }) => {

	return (
		<table className={styles.table}>
			{
				header ?
					<thead className={styles.thead}>
						<tr className={styles.tr}>
							{
								header.map((label, index) => {
									return <th key={index} className={styles.th}>{label}</th>
								})
							}
						</tr>
					</thead> : null
			}
			<tbody className={styles.tbody}>
			{
				data?
				data.map((value, index) => {
					return <tr className={styles.tr} key={index}>
						<td>{value}</td>
					</tr>
				}):null
			}
			</tbody>
		</table>
	)
}

