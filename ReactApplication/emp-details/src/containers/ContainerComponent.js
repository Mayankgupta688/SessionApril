import Abc, { HeaderComponent1 as Xy, HeaderComponent2, HeaderComponent3 } from "../components/HeaderComponent";
import { FooterComponent } from "../components/FooterComponent";
import { ContentComponent } from "../components/ContentComponent";

export function ContainerComponent() {
    return (
        <div>
            <h1>This is the main Container Component</h1>
            <Abc></Abc>
            <Xy></Xy>
            <HeaderComponent2></HeaderComponent2>
            <HeaderComponent3></HeaderComponent3><hr/>
            <ContentComponent></ContentComponent><hr/>
            <FooterComponent></FooterComponent>
        </div>
    )
}