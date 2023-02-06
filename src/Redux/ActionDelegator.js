export default function DelegateAction(type) {
  return (data) => ({
    type,
    data,
  });
}
export function DelegateConfigAction(type) {
  return (data, config) => ({
    type,
    data,
    config,
  });
}
