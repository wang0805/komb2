import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import SkuCard from './Skucard'

export default props => (
  <StaticQuery
    query={graphql`
      query SkusForProduct {
        skus: allStripeSku(sort: { fields: [price] }) {
          edges {
            node {
              id
              image
              currency
              price
              attributes {
                name
              }
            }
          }
        }
      }
    `}
    render={({ skus }) => (
      <div className="row">
        {skus.edges.map(({ node: sku }) => (
          <SkuCard {...props} key={sku.id} sku={sku} />
        ))}
      </div>
    )}
  />
)
