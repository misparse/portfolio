import { Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF } from '@react-three/drei'

export default function Experience()
{
    const laptop = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')

    return <>
            
        <color args={ [ '#241a1a' ] } attach="background" />

        <Environment preset="city" />
        
        <PresentationControls
            global
            rotation={ [ 0.13, 0.1, 0 ] }
            polar={ [ - 0.4, 0.2 ] }
            azimuth={ [ - 1, 0.75 ] }
            config={ { mass: 2, tension: 200 } }
            snap={ { mass: 4, tension: 300 } }
        >

            <Float rotationIntensity={ 0.1 } >
                <primitive 
                    object={ laptop.scene }
                    position-y={ - 1.2 }
                />

                <Html
                    transform
                    wrapperClass="htmlScreen"
                    distanceFactor={ 1.17 }
                    position={ [ 0, 0.34, - 1.4 ] }
                    rotation-x={ - 0.256 }
                >
                    <iframe src="https://parsely.w3spaces.com" />
                </Html>

                <rectAreaLight
                    width={ 2.5 }
                    height={ 1.65 }
                    intensity={ 65 }
                    color={ '#fbc693' }
                    rotation={ [ - 0.1, Math.PI, 0 ] }
                    position={ [ 0, 0.55, - 1.15 ] }
                />

                <Text
                    font="./DarlingtonDemo-z8xjG.ttf"
                    fontSize={ 1 }
                    position={ [ 2, 0.75, 0.75 ] }
                    rotation-y={ - 1.2 }
                >
                    Jason Yip
                </Text>
            </Float>
        </PresentationControls>

        <ContactShadows
            position-y={ - 1.4 }
            opacity={ 0.4 }
            scale={ 5 }
            blur={ 2.4 }
        />

    </>
}