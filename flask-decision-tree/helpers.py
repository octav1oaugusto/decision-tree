# Causa e Sintoma
def parse_id(text):
  text = text.strip()
  if text.endswith('"'):
    # Sintoma ou causa
    if text.startswith('"S ') or text.startswith('"C '):
      # ...
      id = text[3:-1]
      return id
  #   # Causa
  #   if text.startswith('"C '):
  #     # ...
  #     id = text[3:-1]
  #     return id
  # # print(text)
  raise Exception('Identificador inválido. Um identificador deve começar com "C " ou "S ".')

# Solução
def parse_solution(text):
  text = text.strip()
  if text.startswith('"') and text.endswith('"'):
    return text[1:-1]
  raise Exception('A solução de uma causa deve estar entre aspas duplas (").')
