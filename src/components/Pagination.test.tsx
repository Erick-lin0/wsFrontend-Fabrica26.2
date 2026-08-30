import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Pagination } from "@/components/Pagination";

describe("<Pagination />", () => {
  it("não renderiza nada quando existe apenas uma página", () => {
    const { container } = render(
      <Pagination paginaAtual={1} totalDePaginas={1} aoMudarPagina={vi.fn()} />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it("desabilita o botão anterior na primeira página", () => {
    render(<Pagination paginaAtual={1} totalDePaginas={3} aoMudarPagina={vi.fn()} />);

    expect(screen.getByLabelText("Página anterior")).toBeDisabled();
    expect(screen.getByLabelText("Próxima página")).toBeEnabled();
  });

  it("desabilita o botão seguinte na última página", () => {
    render(<Pagination paginaAtual={3} totalDePaginas={3} aoMudarPagina={vi.fn()} />);

    expect(screen.getByLabelText("Próxima página")).toBeDisabled();
  });

  it("avança para a próxima página ao clicar", () => {
    const aoMudarPagina = vi.fn();
    render(
      <Pagination paginaAtual={2} totalDePaginas={5} aoMudarPagina={aoMudarPagina} />,
    );

    fireEvent.click(screen.getByLabelText("Próxima página"));

    expect(aoMudarPagina).toHaveBeenCalledWith(3);
  });
});