import { describe, it, test, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";

import Button from "./Button.vue";

describe("Button.vue", () => {
  // Props: type
  it("设置类型prop时,应该具有正确的类型类", () => {
    const types = ["primary", "success", "warning", "danger", "info"];
    types.forEach((type) => {
      const wrapper = mount(Button, {
        props: { type: type as any },
      });
      console.log(expect(wrapper.classes()));
      expect(wrapper.classes()).toContain(`zy-button--${type}`);
    });
  });

  // Props: size
  it("设置尺寸道具时，应具有正确的尺寸等级", () => {
    const sizes = ["large", "default", "small"];
    sizes.forEach((size) => {
      const wrapper = mount(Button, {
        props: { size: size as any },
      });
      expect(wrapper.classes()).toContain(`zy-button--${size}`);
    });
  });

  // Props: plain, round, circle
  it.each([
    ["plain", "is-plain"],
    ["round", "is-round"],
    ["circle", "is-circle"],
    ["disabled", "is-disabled"],
    ["loading", "is-loading"],
  ])("当%s设置为true时,应该具有正确的类", (prop, className) => {
    const wrapper = mount(Button, {
      props: { [prop]: true },
      global: {
        stubs: ["ErIcon"],
      },
    });
    expect(wrapper.classes()).toContain(className);
  });

  it("设置本机类型道具时，应具有正确的本机类型属性", () => {
    const wrapper = mount(Button, {
      props: { nativeType: "submit" },
    });
    expect(wrapper.element.tagName).toBe("BUTTON");
    expect((wrapper.element as any).type).toBe("submit");
  });

  // Test the click event with and without throttle
  // it.each([
  //   ["withoutThrottle", false],
  //   ["withThrottle", true],
  // ])("发出点击事件 %s", async (_, useThrottle) => {
  //   const clickSpy = vi.fn();
  //   const wrapper = mount(() => (
  //     //@ts-ignore
  //     <Button
  //       onClick={clickSpy}
  //       {...{
  //         useThrottle,
  //         throttleDuration: 400,
  //       }}
  //     />
  //   ));

  //   await wrapper.get("button").trigger("click");
  //   await wrapper.get("button").trigger("click");
  //   await wrapper.get("button").trigger("click");
  //   expect(clickSpy).toBeCalledTimes(useThrottle ? 1 : 3);
  // });

  // Props: tag
  it("设置标签道具时应呈现自定义标签", () => {
    const wrapper = mount(Button, {
      props: { tag: "a" },
    });
    expect(wrapper.element.tagName.toLowerCase()).toBe("a");
  });

  // Events: click
  it("单击按钮时应发出单击事件", async () => {
    const wrapper = mount(Button, {});
    await wrapper.trigger("click");
    expect(wrapper.emitted().click).toHaveLength(1);
  });

  const onClick = vi.fn();
  test("基本按钮", async () => {
    const wrapper = mount(() => (
      //@ts-ignore
      <Button type="primary" {...{ onClick }}>
        button content
      </Button>
    ));

    // class
    expect(wrapper.classes()).toContain("zy-button--primary");

    // slot
    expect(wrapper.get("button").text()).toBe("button content");

    // events
    await wrapper.get("button").trigger("click");
    expect(onClick).toHaveBeenCalledOnce();
  });

  test("禁用按钮", async () => {
    const wrapper = mount(() => (
      //@ts-ignore
      <Button disabled {...{ onClick }}>
        disabled button
      </Button>
    ));

    // class
    expect(wrapper.classes()).toContain("is-disabled");

    // attrs
    expect(wrapper.attributes("disabled")).toBeDefined();
    expect(wrapper.find("button").element.disabled).toBeTruthy();

    // events
    await wrapper.get("button").trigger("click");
    expect(onClick).toHaveBeenCalledOnce();
    expect(wrapper.emitted("click")).toBeUndefined();
  });
});
