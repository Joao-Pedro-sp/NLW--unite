interface MyButtonProps {
  texto: string
}

function MyButton(props: MyButtonProps) {
  return <button className="bg-orange-400 h-10 px-3 rounded font-medium">{props.texto}</button>
}

export function App() {
  return (
    <div className="flex gap-2">
      <MyButton texto="Clique aqui"/>
      <MyButton texto="Botao 2"/>
      <MyButton texto="Botao 3"/>
      <MyButton texto="Oi"/>
    </div>
  )
}
