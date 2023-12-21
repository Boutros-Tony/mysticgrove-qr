import styles from '../styles/nutrition.module.scss';

import FooterWhite from 'components/footer-white/footer.component';
import Head from 'next/head';

const NutritionInformation = () => {
    return (
        <>
         <Head>
        <title>Nutrition Information | Mystic Grove</title>
        <meta name="description" content="Nutrition Information | Mystic Grove" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#e5dbc8"/>
      </Head>
         <div className={styles.nutritionWrapper}>
         <img src="/assets/back.jpg" className={styles.back} alt="" srcset="" />
        
            <h1>Nutritional Information</h1>
            
            <div className={styles.container}>
                <ul>
                    <li className={styles.extrafont}>Mystic Grove Chapter XII – The Mediterranean Dry Gin</li>
                </ul>
            
            <h2>Ingredients:</h2>
            <p className={styles.withBorder}>
            Pure extra neutral alcohol distilled from grain
            </p>
            <p className={styles.withBorder}>
            Selected botanicals
            </p>
            <p className={styles.withBorder}>
            Highland spring water
            </p>

            <table>
            <thead>
    <tr>
        <th></th>
      <th>per <br className='br-phone' /> 25 ml.</th>
      <th>per <br className='br-phone' />50 ml.</th>
      <th>per <br className='br-phone' />100 ml.</th>
    </tr>
  </thead>
                
                <tbody>
                <tr>
                    <td>ABV</td>
                    <td>47% Vol.</td>
                    <td>47% Vol.</td>
                    <td>47% Vol.</td>
                </tr>
                <tr>
                    <td>Alcohol</td>
                    <td>9,28 g.</td>
                    <td>18,56 g.</td>
                    <td>37,13 g.</td>
                </tr>
                <tr>
                    <td>Calories value</td>
                    <td>269,87 KJ /<br className='br-phone' />64,5 Kcal</td>
                    <td>539,75 KJ /<br className='br-phone' />129 Kcal</td>
                    <td>1079,5 KJ /<br className='br-phone' />258 Kcal</td>
                </tr>
                <tr>
                    <td>Fat</td>
                    <td> {`0 g.`}</td>
                    <td> {`0 g.`}</td>
                    <td> {`0 g.`}</td>
                </tr>
                <tr>
                    <td>Saturates</td>
                    <td> {`0 g.`}</td>
                    <td> {`0 g.`}</td>
                    <td> {`0 g.`}</td>
                </tr>
                <tr>
                    <td>Carbohydrates</td>
                    <td> {`0 g.`}</td>
                    <td> {`0 g.`}</td>
                    <td> {`0 g.`}</td>
                </tr>
                <tr>
                    <td>Sugar</td>
                    <td> {`0 g.`}</td>
                    <td> {`0 g.`}</td>
                    <td> {`0 g.`}</td>
                </tr>
                <tr>
                    <td>Proteins</td>
                    <td> {`0 g.`}</td>
                    <td> {`0 g.`}</td>
                    <td> {`0 g.`}</td>
                </tr>
                <tr>
                    <td>Salt</td>
                    <td> {`0 g.`}</td>
                    <td> {`0 g.`}</td>
                    <td> {`0 g.`}</td>
                </tr>
                <tr>
                    <td>Allergens</td>
                    <td>ND</td>
                    <td> ND.</td>
                    <td> ND</td>
                </tr>
                </tbody>
                <span className={styles.tableSpan}>* ND: Not Detected</span>
            </table>
        

            <ul>
                <li  className={styles.extrafont}>Mystic Grove Chapter VIII – The Golden Saffron Gin</li>
              <li  className={styles.extrafont}>Mystic Grove Chapter IX – The Blue Indigo Gin</li>
            </ul>
            
            <h2>Ingredients:</h2>
            <p className={styles.withBorder}>
            Pure extra neutral alcohol distilled from grain
            </p>
            <p className={styles.withBorder}>
            Selected botanicals
            </p>
            <p className={styles.withBorder}>
            Highland spring water
            </p>
            <table>
            <thead>
    <tr>
        <th></th>
      <th>per<br className='br-phone' /> 25 ml.</th>
      <th>per<br className='br-phone' /> 50 ml.</th>
      <th>per<br className='br-phone' /> 100 ml.</th>
    </tr>
  </thead>
                
                <tbody>
                <tr>
                    <td>ABV</td>
                    <td>43% Vol.</td>
                    <td>43% Vol.</td>
                    <td>43% Vol.</td>
                </tr>
                <tr>
                    <td>Alcohol</td>
                    <td>8,49 g.</td>
                    <td>16,99 g.</td>
                    <td>33,98 g.</td>
                </tr>
                <tr>
                    <td>Calories value</td>
                    <td>246,9 KJ /<br className='br-phone' /> 59 Kcal</td>
                    <td>493,8 KJ /<br className='br-phone' /> 118 Kcal</td>
                    <td>987,6 KJ /<br className='br-phone' /> 236 Kcal</td>
                </tr>
                <tr>
                    <td>Fat</td>
                    <td>{`0 g.`}</td>
                    <td>{`0 g.`}</td>
                    <td>{`0 g.`}</td>
                </tr>
                <tr>
                    <td>Saturates</td>
                    <td> {`0 g.`}</td>
                    <td> {`0 g.`}</td>
                    <td> {`0 g.`}</td>
                </tr>
                <tr>
                    <td>Carbohydrates</td>
                    <td> {`0 g.`}</td>
                    <td> {`0 g.`}</td>
                    <td> {`0 g.`}</td>
                </tr>
                <tr>
                    <td>Sugar</td>
                    <td> {`0 g.`}</td>
                    <td> {`0 g.`}</td>
                    <td> {`0 g.`}</td>
                </tr>
                <tr>
                    <td>Proteins</td>
                    <td> {`0 g.`}</td>
                    <td> {`0 g.`}</td>
                    <td> {`0 g.`}</td>
                </tr>
                <tr>
                    <td>Salt</td>
                    <td> {`0 g.`}</td>
                    <td> {`0 g.`}</td>
                    <td> {`0 g.`}</td>
                </tr>
                <tr>
                    <td>Allergens</td>
                    <td>ND</td>
                    <td>ND</td>
                    <td>ND</td>
                </tr>
                </tbody>
                <span className={styles.tableSpan}>* ND: Not Detected</span>
            </table>
            
            </div>
            
        </div>
        <FooterWhite/>
        </>
       
    )
}

export default NutritionInformation;