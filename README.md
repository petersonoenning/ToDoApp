# To-Do-App com React Native

Este é um aplicativo de lista de tarefas (To-Do List) desenvolvido com React Native. O app permite ao usuário adicionar, marcar como concluída, excluir e persistir tarefas localmente, utilizando a Context API, Hooks e AsyncStorage.

## Funcionalidades

- **Adicionar Tarefas**: O usuário pode adicionar tarefas digitando um texto em um input e clicando no botão de adicionar.
- **Marcar como Concluída**: As tarefas podem ser marcadas como concluídas ou pendentes.
- **Excluir Tarefas**: As tarefas podem ser removidas da lista.
- **Persistência de Dados**: O app salva as tarefas no dispositivo utilizando o AsyncStorage e as restaura ao reabrir o aplicativo.

## Requisitos Técnicos

- **Context API**: Usada para gerenciar o estado global da lista de tarefas.
- **Hooks**: Utilização dos hooks `useState` e `useEffect` para controle de estado e carregamento de dados.
- **Estilos Básicos**: O layout é construído com componentes padrão do React Native, como `FlatList`, `TextInput`, `TouchableOpacity`, entre outros.
- **AsyncStorage**: As tarefas são salvas localmente utilizando o `AsyncStorage` e restauradas ao reiniciar o app.

## Funcionalidades Extras (Opcionais)

- **Filtro de Tarefas**: O app permite filtrar as tarefas para exibir todas, apenas as concluídas ou apenas as pendentes.
- **Animação Simples**: Ao marcar uma tarefa como concluída, uma animação simples é aplicada, utilizando a biblioteca React Native Reanimated.

## Como Rodar o Projeto

1. Clone o repositório:
    ```bash
    git clone https://github.com/petersonoenning/ToDoApp.git
    ```

2. Navegue até a pasta do projeto:
    ```bash
    cd ToDoApp
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Execute o projeto no simulador ou dispositivo:
    - Para iOS:
      ```bash
      npx react-native run-ios
      ```
    - Para Android:
      ```bash
      npx react-native run-android
      ```

## Tecnologias Utilizadas

- React Native
- Context API
- AsyncStorage
- React Native Reanimated (para animações)
