'use client';

import React from 'react';

interface ClientWrapperProperties {
  component: React.ComponentType;
}

export function ClientWrapper(properties: ClientWrapperProperties) {
  const { component: Component } = properties;

  return <Component />;
}
