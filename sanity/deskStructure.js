// deskStructure.js
import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Pages')
    .items([
        S.listItem()
          .title('Settings')
          .icon(() => '⚙️')
          .child(
            S.document()
              .schemaType('settingsPage')
              .documentId('settingsPage')
        ),
        S.listItem()
        .title('Synapsis knowledge')
        .icon(() => '💭')
        .child(
          S.document()
            .schemaType('synapsisKnowledge')
            .documentId('synapsisKnowledge')
        ),
        S.divider(),
        ...S.documentTypeListItems().filter(listItem => !['synapsisKnowledge', 'settingsPage'].includes(listItem.getId()))
    ])