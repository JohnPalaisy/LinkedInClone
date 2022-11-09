import React from 'react'
import './widget.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

export default function Widgets() {

  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <div className='widgets'>
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle('John Built It', 'Top News - 10K viewers')}
      {newsArticle('Covid-19 is a Hoax', 'Top News - 1.3M viewers')}
      {newsArticle('Emma is beyond SEXY', 'Top News - 106K viewers')}
      {newsArticle('Silly Sex Toys', 'Top News - 12K viewers')}

    </div>
  )
}