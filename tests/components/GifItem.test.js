import { screen, render } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"




describe('Pruebas en <GifItem/>', () => { 
    
    const title= "DRAGON BALL"
    const url= "http://www.yomero.com"
    
    test('debe de hacer match con el snapshot', () => { 
        
        

        const { container } = render(<GifItem title={title} url={ url}/>)
        expect( container).toMatchSnapshot();

        // screen.debug()
     })

     test('debe de mostrar la imagen con el URL y el ALT', () => { 
     
       const { container } = render(<GifItem title={ title } url={ url }/>)

        const { src, alt } = screen.getAllByRole('img')
        expect( src).toBe( url ); 
      })
 })