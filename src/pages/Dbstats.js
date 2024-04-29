import React from 'react'
import DbHeader from '../component/DbHeader'
import OrderComparisonChart from '../component/OrderComparisionChart'

const Dbstats = () => {
  return (
    <div>
    <DbHeader />
    
    <main className="pt-28 flex flex-col items-center">
    <h1>Order Comparison Chart</h1>
      <OrderComparisonChart />
    </main>
    </div>
  )
}

export default Dbstats