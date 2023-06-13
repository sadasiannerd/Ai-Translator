import React from 'react'
import CardItem from './CardItem'

export default function Body() {
  return (
    <>
    <h1 className="text-3xl font-Bitter ml-2">About this app</h1>
    <div id="body" className="mx-12 py-60">
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec rutrum dui. Nullam interdum est sed orci congue laoreet. Nullam ultricies pharetra nulla, eget varius augue tincidunt ac. Nam tincidunt diam lobortis commodo vulputate. Maecenas mauris felis, volutpat non tincidunt quis, viverra vel lectus. Duis vehicula vitae purus accumsan efficitur. Nullam vel ipsum sed neque varius aliquet eget at nunc.

Pellentesque feugiat eros quis elit ornare, id consequat dui lacinia. Praesent et enim odio. Morbi imperdiet ligula at luctus ullamcorper. Donec in tempus urna. Proin dictum, sapien vitae egestas dictum, tortor mauris lacinia metus, nec molestie mi dolor at lorem. Quisque eu nunc eu nibh elementum malesuada at in ligula. Mauris imperdiet nunc ut suscipit pellentesque. Cras lobortis turpis eu justo gravida, quis rutrum velit lacinia.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ac massa molestie, rutrum arcu et, interdum eros. Mauris ullamcorper viverra dapibus. Etiam eu nunc urna. Suspendisse sit amet metus sapien. In in ligula in metus auctor ornare sit amet vitae velit. Proin interdum laoreet purus sit amet varius. Integer rutrum consectetur leo, non viverra lorem gravida et. Cras viverra, erat vel aliquet ornare, ligula massa euismod nulla, nec tristique nisl enim vel est. Vivamus hendrerit magna non faucibus ultricies. Nullam dapibus viverra sem in vehicula. Donec ornare ultricies sem, sit amet convallis libero aliquam at. Vivamus sit amet orci in dui semper pharetra. Duis cursus felis quis nisi tempor, sit amet laoreet nisi viverra.

Sed mollis eleifend elit, vel auctor ligula finibus eu. Duis tincidunt mauris sed pretium tristique.<span className="bg-yellow-100">Duis a ultricies augue. Fusce aliquam ultricies laoreet. Aenean quis convallis enim, scelerisque blandit diam. Phasellus lacinia cursus vulputate. Etiam luctus venenatis velit, nec accumsan sem condimentum et.

Aenean pretium aliquam finibus. Etiam ullamcorper condimentum ex vel blandit. Vestibulum ac arcu sit amet magna hendrerit bibendum. Vivamus malesuada commodo ultrices. Aliquam nec imperdiet sapien. Fusce sollicitudin mauris sed interdum vehicula. Nunc eu sollicitudin nunc. Aenean mollis nisi justo, eu finibus massa pulvinar et. Ut vulputate risus at ultricies faucibus. Pellentesque imperdiet a augue at porta. Phasellus quis placerat tellus.  </span> 
    </p>
    


    </div>
    <h1 className="text-3xl font-Bitter ml-2">About Us</h1>
    <div id ="about-us" className="flex justify-center space-x-20 py-20">
    <CardItem who="Loc" img="/User.jpg" description="2nd year @Queen's"/>
    <CardItem who="Nguyen" img="/User.jpg" description="2nd year @Queen's" />
    </div>
    </>
    
  )
}
