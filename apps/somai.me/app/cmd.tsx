"use client";
import {
  House,
  Command,
  Moon,
  BookOpen,
  SunDim,
  Notebook,
  Info,
  ArrowUpRight,
} from "@phosphor-icons/react/dist/ssr";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import React from "react";

import { CmdK, Button, Box } from "@thugga/ui";

import { Post } from "@/lib/essays";

export default function Cmd(props: { essays: Post[] }) {
  const router = useRouter();

  const { setTheme } = useTheme();
  const [open, setOpen] = React.useState(false);

  // Command + K command to focus command menu
  React.useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        setOpen(!open);
        event.preventDefault();
      }
    };
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, []);

  const handleOpenChange = () => {
    setOpen(!open);
  };

  const handleNavigate = (path: string) => {
    router.push(path);
    handleOpenChange();
  };

  return (
    <CmdK.Dialog
      open={open}
      trigger={
        <Box width="fit">
          <Button variant="secondary" size="extraSmall">
            Command Menu <Command /> + K
          </Button>
        </Box>
      }
      onOpenChange={handleOpenChange}
    >
      <CmdK.Input
        placeholder="Type a command or search..."
        // value={inputValue}
        // onValueChange={setQuery}
      />
      <CmdK.List>
        <CmdK.Empty>No results found</CmdK.Empty>
        <CmdK.Group>
          <CmdK.Item onSelect={() => handleNavigate("/")}>
            <House /> Home
          </CmdK.Item>
          <CmdK.Item onSelect={() => handleNavigate("/about")}>
            <Info /> About
          </CmdK.Item>
        </CmdK.Group>
        <CmdK.Group heading="Writing">
          <CmdK.Item onSelect={() => handleNavigate("/essays")}>
            <Notebook /> Essays
          </CmdK.Item>
          <CmdK.Item onSelect={() => handleNavigate("/papers")}>
            <BookOpen /> Academic Papers
          </CmdK.Item>
        </CmdK.Group>
        <CmdK.Group heading="Recent Publications">
          {props.essays?.map((essay) => (
            <CmdK.Item
              key={essay.meta.slug}
              onSelect={() => handleNavigate(`/essay/${essay.meta.slug}`)}
            >
              {essay.meta.title}
            </CmdK.Item>
          ))}
        </CmdK.Group>
        <CmdK.Group heading="Other Links">
          <CmdK.Item
            onSelect={() =>
              handleNavigate("https://github.com/meleksomai/website")
            }
          >
            <GitHubLogoIcon /> Github Repository
          </CmdK.Item>
          <CmdK.Item
            onSelect={() => handleNavigate("https://rethinkhealth.io")}
          >
            <ArrowUpRight /> Rethink Health
          </CmdK.Item>
        </CmdK.Group>
        <CmdK.Group heading="Theme">
          <CmdK.Item
            onSelect={() => {
              setTheme("light");
              handleOpenChange();
            }}
          >
            <SunDim /> Light Theme
          </CmdK.Item>
          <CmdK.Item
            onSelect={() => {
              setTheme("dark");
              handleOpenChange();
            }}
          >
            <Moon /> Dark Theme
          </CmdK.Item>
        </CmdK.Group>
      </CmdK.List>
    </CmdK.Dialog>
  );
}
