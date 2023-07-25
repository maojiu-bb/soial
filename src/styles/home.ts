import { CSSProperties } from 'react'

export const homeStyle = {
  main: {
    marginTop: '50px',
    padding: '12px',
    paddingBottom: '60px'
  } as CSSProperties,

  nav: {
    backgroundColor: '#e1c0ff',
    color: '#fff',
    position: 'fixed',
    width: '100%',
    height: '50px',
    top: '0px'
  } as CSSProperties,

  popupBody: {
    width: '70vw',
    borderTopRightRadius: '20px',
    borderBottomRightRadius: '20px'
  } as CSSProperties,

  popupImage: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    margin: '50px 80px 16px',
    border: '1px solid #ccc',
    boxSizing: 'border-box'
  } as CSSProperties,

  popupTitle: {
    textAlign: 'center'
  } as CSSProperties,

  popupDesc: {
    margin: '20px 0 50px',
    textAlign: 'center',
    fontSize: '14px'
  } as CSSProperties,

  popupCell: {
    padding: '0 15px',
    display: 'flex',
    justifyContent: 'space-between',
    width: 210,
    height: 50,
    backgroundColor: '#f5f5f5',
    borderRadius: '15px',
    margin: '15px auto 0',
    lineHeight: '50px',
    fontSize: 15
  } as CSSProperties
}
