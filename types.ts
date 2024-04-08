import type { MarkdownParsedContent } from "@nuxt/content/dist/runtime/types";

export type Section = 'projects' | 'blog' | 'events';

export interface SocialLink {
    name: string;
    url: string;
    icon: string;
}

export interface Blog extends MarkdownParsedContent {
  title: string;
  description: string;
  date: string;
  img?: string;
  tags: string[];
  externalUrl?: string;
}

export interface Event extends MarkdownParsedContent {
  event: string;
  title: string;
  date: string;
  description: string;
  url: string;
  img?: string;
  embed?: string;
  video?: string;
  slides?: string;
  tags: string[];
}