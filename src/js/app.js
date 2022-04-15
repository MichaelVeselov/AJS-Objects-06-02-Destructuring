export default function getAttack(character) {
  const result = [];
  const { special } = character;
  for (const item of special) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = item;
    result.push({
      id, name, icon, description,
    });
  }
  return result;
}
